<template>
    <v-main>
        <v-container>

            <v-card flat>
                <v-card-title>
                    News
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>

                <v-data-table 
                    :headers="headers" 
                    :items="contents" 
                    :page.sync="page"
                    :items-per-page="itemsPerPage"
                    :search="search"
                    fixed-header
                    class="boardType1"
                    @click:row="rowClick" 
                    @page-count="pageCount = $event"
                > 
                </v-data-table> 
            </v-card>           

            <div class="text-center pt-2">
                <v-pagination
                    v-model="page"
                    :length="pageCount"
                    depressed
                    color="#444"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                ></v-pagination>
            </div>
    
            <v-row no-gutters> 
                <v-btn tile depressed color="#eee" @click="writeClick" > 작성 </v-btn> 
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
            perPage: 9,
            pageCount: 0,
            pages: [],
            itemsPerPage: 10,
            totalVisible: 10,
            headers: [ 
                { text: '순서', align: 'center', sortable: false, value: 'number', }, 
                { text: '제목', value: 'title' }, 
                { text: '날짜', align: 'center', value: 'regDt' } 
            ], 
            contents: [
                { number: 1, title: '공지사항입니다.', regDt: '2022-02-14' },
                { number: 2, title: '그래 그럴수 있어~', regDt: '2022-02-14' },
                { number: 3, title: '꼭 해야 하는 걸까?', regDt: '2022-02-30' },
            ],
        } 
    } 
};
</script>

<style lang="scss">

</style>