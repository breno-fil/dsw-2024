<template>
    <v-app-bar :elevation="4">
        <v-app-bar-title :text="title" />
    </v-app-bar>

    <v-navigation-drawer :location="$vuetify.display.mobile ? 'bottom' : undefined" rail expand-on-hover>
        <v-list v-for="item in navigationItems" :density="'compact'">
            <v-list-item v-if="item.children.length == 0" :prepend-icon="item.icon" :title="item.title"
                :href="item.link" />

            <v-list-group v-if="item.children.length != 0" :value="item.title">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.title" />
                </template>
                <v-list-item v-for="child in item.children" :title="child.title" :href="child.link" />
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>

const navigationItems: Array<{ "title": string, "icon": string, "children": Array<{ "title": string, "link": string }>, "link"?: string }> = [
    {
        "title": "Início",
        "icon": "home",
        "children": [],
        "link": '/'
    },
    {
        "title": "Dados",
        "icon": "scatter_plot",
        "children": [
            {
                "link": "/tables",
                "title": "Tabelas"
            },
            {
                "link": "/charts",
                "title": "Gráficos"
            },
        ]
    },
    {
        "title": "Elementos",
        "icon": "grid_view",
        "children": [
            {
                "link": "/icons",
                "title": "Ícones",
            }
        ]
    },
];

const props = defineProps({ 'title': String })
const emits = defineEmits(['change', 'delete'])

</script>