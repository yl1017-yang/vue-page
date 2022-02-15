<template>
    <v-container fluid pa-0>
        <v-img
            max-height="300"
            max-width="100%"
            src="https://cdn.pixabay.com/photo/2021/10/22/00/59/restaurant-6730811_1280.jpg"
        ></v-img>

        <v-layout column wrap>
            <v-row>
                <v-col
                    v-for="n in 9"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                >
                    <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                        ></v-progress-circular>
                        </v-row>
                    </template>
                    </v-img>
                </v-col>
            </v-row>
        </v-layout>

    </v-container>
    
</template>
<script>
export default {
    name: "About",
    components: {},
};
</script>