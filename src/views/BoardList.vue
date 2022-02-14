<template>
    <v-main>
        <v-container>
            <v-data-table 
                :headers="headers" 
                :items="desserts" 
                :page.sync="page"
                :items-per-page="itemsPerPage"
                :search="search"
                class="elevation-1" 
                @click:row="rowClick" 
            > 
            </v-data-table>
            <div class="text-center pt-2">
                <v-pagination
                v-model="page"
                :length="pageCount"
                :total-visible="totalVisible"
                next-icon="mdi-menu-right"
                prev-icon="mdi-menu-left"></v-pagination>
            </div>
            <v-row> 
                <v-btn Depressed color="#eee" @click="writeClick" > 작성 </v-btn> 
            </v-row>

            <div>참고 https://dollvin.tistory.com/61</div>
            <div>https://fyzh99.tistory.com/44</div>
            <div>LAPM( 리눅스 + 아파치 + PHP + MySql) 깃 설치 : https://dollvin.tistory.com/25?category=620148</div>
            <div>https://v15.vuetifyjs.com/ko/</div>

        </v-container>
    </v-main> 
</template>

<script>
import axios from 'axios'

export default {
    name: 'boardList',        
    created() { 
        this.fetch() 
    }, 

    methods: { 
        fetch() { 
            console.log('fetch list') 
            axios.get('http://localhost:8000/api/board/list') 
            .then((response) => { 
                console.log(response) 
            }) 
            .catch((error) => { 
                console.log(error) 
            }) 
        }, 
        writeClick() { 
            this.$router.push('/vue-page/views/writer') 
        }, 
        rowClick(item) { 
            this.$router.push('/vue-page/views/view/' + item.seq) 
        }
    },
        
    data () { 
        return { 
            text: 'Welcome to AyoteraLab',
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            totalVisible: 10,
            headers: [ 
                { text: '순서', align: 'center', sortable: false, value: 'number', }, 
                { text: '제목', align: 'center', value: 'title' }, 
                { text: '날짜', align: 'center', value: 'regDt' } 
            ], 
            desserts: [],
        } 
    } 
};
</script>

<style lang="scss">

</style>