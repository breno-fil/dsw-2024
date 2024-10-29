<template>
    <v-container class="flex-fill ga-2">
        <v-row no-gutters>
            <appTitle title="In&iacute;cio"></appTitle>
        </v-row>

        <v-row no-gutters class="flex-fill flex-wrap ga-2">

            <v-col class="ga-2" :cols="8">

                <v-row no-gutters class="ga-4">

                    <v-col class="d-flex flex-column ga-4">

                        <v-card title="Por que um template?" prepend-icon="question_mark" :text="aboutText"
                            :elevation="elevation" />

                        <v-card title="Padronização" :text="patternText" prepend-icon="spellcheck"
                            :elevation="elevation" />

                        <v-card title="Objetivo" prepend-icon="verified" :text="objectiveText" :elevation="elevation" />

                    </v-col>

                    <v-col class="d-flex flex-column ga-4">
                        <v-hover v-slot:default="{ isHovering, props }">
                            <v-card hover v-bind="props" title="Features" subtitle="Implementações no template"
                                prepend-icon="app_registration" append-icon="chevron_right" href="/features"
                                :elevation="elevation" :color="isHovering ? 'primary' : 'undefined'" />
                        </v-hover>

                        <v-hover v-slot:default="{ isHovering, props }">
                            <v-card hover v-bind="props" title="Estilos e Animações" subtitle="Classes e transições"
                                prepend-icon="palette" append-icon="chevron_right" href="/styles" :elevation="elevation"
                                :color="isHovering ? 'primary' : 'undefined'" />
                        </v-hover>

                        <v-hover v-slot:default="{ isHovering, props }">
                            <v-card hover v-bind="props" title="Componentes" subtitle="Componentes implementados"
                                prepend-icon="dashboard" append-icon="chevron_right" href="/components"
                                :elevation="elevation" :color="isHovering ? 'primary' : 'undefined'" />
                        </v-hover>
                    </v-col>

                </v-row>

            </v-col>

        </v-row>

    </v-container>
</template>

<style lang="css"></style>

<script lang="ts" setup>
import appTitle from '../components/common/Title.vue';

const elevation: number = 16

const aboutText: string = "Um template serve como um ponto de partida estruturado para novos projetos, oferecendo uma base sólida que agiliza o desenvolvimento. Ele elimina a necessidade de configurar elementos básicos repetidamente, permitindo que a equipe se concentre no que realmente importa: entregar valor. Além disso, a padronização facilita a manutenção e a escalabilidade das aplicações."

const objectiveText: string = "O principal objetivo deste template é acelerar o desenvolvimento de aplicações, fornecendo uma base sólida e consistente. Ele busca simplificar a criação de interfaces e garantir que as melhores práticas sejam aplicadas desde o início, economizando tempo e esforço da equipe."

const patternText: string = "Garante consistência visual, reduz retrabalho e facilita a integração entre equipes, promovendo um desenvolvimento mais ágil."
</script>