<template>
    <v-main>
        <v-container>

            about
            <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="250"
            max-width="350"
            src="https://picsum.photos/id/11/500/300"
            ></v-img>

            <v-btn
                elevation="2"
                rounded
            >버튼 테스트
            </v-btn>

            <v-card
            elevation="2"
            shaped
            >
            생기다 만 카드 테스트 <br>
            맘에안듬
            </v-card>

        </v-container>
    </v-main> 
</template>
<script>
export default {
    name: "About",
    components: {},
};
</script>