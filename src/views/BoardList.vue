<template>
    <v-main>
        <v-container>
            <v-data-table 
                :headers="headers" 
                :items="desserts" 
                :items-per-page="10" 
                class="elevation-1" 
                @click:row="rowClick" 
            > 
            </v-data-table> 
            <v-row> 
                <v-btn outlined color="black" @click="writeClick" > 작성 </v-btn> 
            </v-row>

            <div>참고 https://dollvin.tistory.com/61</div>
            <div>LAPM( 리눅스 + 아파치 + PHP + MySql) 깃 설치 : https://dollvin.tistory.com/25?category=620148</div>

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