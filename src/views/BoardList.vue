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
                    ></v-pagination>
                    <v-text-field
                    :value="itemsPerPage"
                    label="Items per page"
                    type="number"
                    min="-1"
                    max="15"
                    @input="itemsPerPage = parseInt($event, 10)"
                ></v-text-field>
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
            contents: [
                { number: 1, title: 'ABC', regDt: '2022-02-14' },
                { number: 2, title: 'DEF', regDt: '2022-02-14' },
                { number: 3, title: 'GHI', regDt: '2022-02-14' },
            ],
        } 
    } 
};
</script>

<style lang="scss">

</style>