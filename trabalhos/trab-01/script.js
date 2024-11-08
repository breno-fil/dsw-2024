Vue.component('transaction-form', {
    template: `
        <form @submit.prevent="submitTransaction" class="transaction-form">
            <input type="text" v-model="description" placeholder="Descrição" required>
            <input type="number" v-model.number="amount" placeholder="Valor" required>
            <button type="submit">Adicionar</button>
        </form>
    `,
    data() {
        return {
            description: '',
            amount: null,
        };
    },
    methods: {
        submitTransaction() {
            this.$emit('add-transaction', { description: this.description, amount: this.amount });
            this.description = '';
            this.amount = null;
        }
    }
});

Vue.component('transaction-list', {
    props: ['transactions', 'currentPage', 'totalPages'],
    template: `
        <div class="transaction-list">
            <ul>
                <li class="header">
                    <span>Descrição</span>
                    <span>Valor</span>
                    <span>Ações</span>
                </li>
                <li v-for="(transaction, index) in transactions" :key="index"
                    :class="getClass(transaction)">
                    <span class="description">{{ transaction.description }}</span>
                    <span class="amount">{{ formattedAmount(transaction.amount, index) }}</span>
                    <span class="actions">
                        <button @click="remove(index)" title="Remover" class="action-button remove-button">&#10060;</button>
                        <button @click="moveUp(index)" :disabled="index === 0" title="Subir" class="action-button move-up-button">&#8593;</button>
                        <button @click="moveDown(index)" :disabled="index === transactions.length - 1" title="Descer" class="action-button move-down-button">&#8595;</button>
                    </span>
                </li>
            </ul>
            <div class="pagination">
                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Anterior</button>
                <span>Página {{ currentPage }} de {{ totalPages}}</span>
                <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Próxima</button>
            </div>
        </div>
    `,
    methods: {
        getClass(transaction) {
        
        		const credit = transaction.amount > 0;
            const debit = transaction.amount < 0;
            const negative = transaction.cumulativeBalance < 0;
  					
            if (negative) return 'negative-balance';
            
            if (debit) return 'debit';
            
            if (credit) return 'credit';
           
            
           /*  return {
                credit: transaction.amount > 0,
                debit: transaction.amount < 0,
                'negative-balance': transaction.cumulativeBalance < 0,
            }; */
        },
        formattedAmount(amount, index) {
            transactions = this.transactions.slice(0, (index+1));
            amount = transactions.reduce((sum, t) => sum += t.amount, 0);
            return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        },
        remove(index) {
            this.$emit('remove-transaction', index);
        },
        moveUp(index) {
            this.$emit('move-up', index);
        },
        moveDown(index) {
            this.$emit('move-down', index);
        },
        changePage(page) {
            this.$emit('change-page', page);
        }
    }
});

new Vue({
    el: '#app',
    data() {
        return {
            transactions: [],
            currentPage: 1,
            itemsPerPage: 5,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.transactions.length / this.itemsPerPage);
        },
        paginatedTransactions() {
            return this.transactions.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
        }
    },
    methods: {
        addTransaction(transaction) {
            transaction.cumulativeBalance = this.calculateCumulativeBalance(transaction.amount);
            this.transactions.push(transaction);
            this.updateBalances();
        },
        removeTransaction(index) {
            const actualIndex = (this.currentPage - 1) * this.itemsPerPage + index;
            this.transactions.splice(actualIndex, 1);
            this.updateBalances();
        },
        moveUp(index) {
            const currentIndex = (this.currentPage - 1) * this.itemsPerPage + index;
            const previousIndex = (currentIndex - 1 < 0) ? 0 : (currentIndex - 1);
						
            if (currentIndex > 0) {
              let currentTransaction = this.transactions[currentIndex];
            	let previousTransaction = this.transactions[previousIndex];

              this.transactions.splice(previousIndex, 1, currentTransaction);
              this.transactions.splice(currentIndex, 1, previousTransaction);
              
            	this.updateBalances();
            }
        },
        moveDown(index) {
						const totalTransactions = this.transactions.length
        
            const currentIndex = (this.currentPage - 1) * this.itemsPerPage + index;
            const nextIndex = (currentIndex + 1 > totalTransactions) ? (totalTransactions - 1) : (currentIndex + 1);
            
            if (currentIndex < totalTransactions) {
              let currentTransaction = this.transactions[currentIndex];
            	let nextTransaction = this.transactions[nextIndex];

              this.transactions.splice(currentIndex, 1, nextTransaction);
              this.transactions.splice(nextIndex, 1, currentTransaction);
              
            	this.updateBalances();
             }
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        calculateCumulativeBalance(newAmount) {
            return this.transactions.length === 0 
                ? newAmount 
                : this.transactions[this.transactions.length - 1].cumulativeBalance + newAmount;
        },
        updateBalances() {
            let cumulativeBalance = 0;
            this.transactions.forEach(transaction => {
                cumulativeBalance += Number.parseInt(transaction.amount);
                transaction.cumulativeBalance = cumulativeBalance;
            });
        }
    }
});
