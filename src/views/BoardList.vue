<template>
    <v-container fluid pa-0>
        <v-img
            max-height="120"
            max-width="100%"
            src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
        ></v-img>

        <v-layout column wrap>
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
                    hide-default-footer
                    fixed-header
                    @click:row="rowClick" 
                    @page-count="pageCount = $event"
                    class="boardType1"
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
                <v-btn tile depressed color="#eee" @click="writeClick" > 글작성 </v-btn> 
            </v-row>
            
            <div class="blind">
                참고 https://dollvin.tistory.com/61 <br>
                https://fyzh99.tistory.com/44<br>
                LAPM( 리눅스 + 아파치 + PHP + MySql) 깃 설치 : https://dollvin.tistory.com/25?category=620148<br>
                https://v15.vuetifyjs.com/ko/
            </div>
        </v-layout>

    </v-container>
    
</template>

<script>
//import axios from 'axios'

export default {
    name: 'boardList',        
    created() { 
        this.fetch() 
    }, 

    methods: { 
        fetch() { 
            console.log('fetch list') 
            this.$axios.get('http://localhost:3000/arr')
            .then((res) => { 
                //console.log(res);
                console.log('arr:', res.data)
                this.exampleItems = res.data
            })
            .catch((error) => { 
                console.log(error) 
            }) 
            .finally(() => { 
                console.log("항상 마지막에 실행"); 
            });
        }, 
        writeClick() { 
            this.$router.push('/vue-page/views/writer') 
        }, 
        rowClick(item) { 
            this.$router.push('/vue-page/views/view/' + item.seq) 
        }
    },

    mounted() {
        this.fetch() //db.json 사용
    },
        
    data() { 
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
                // { number: 11, title: '공지사항입니다.', regDt: '2022-02-14' },
                // { number: 22, title: '그래 그럴수 있어~', regDt: '2022-02-14' },
                // { number: 33, title: '꼭 해야 하는 걸까?', regDt: '2022-02-30' },
                // { number: 44, title: '뷰가 뭐길래', regDt: '2022-04-30' },
                // { number: 55, title: '뭐긴 뭐야 트렌드지', regDt: '2022-04-30' },
            ],
        } 
    } 
};
</script>

<style lang="scss">

</style>