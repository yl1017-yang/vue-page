<template>    
    <v-container fluid pa-0>
        <v-img
            max-height="120"
            max-width="100%"
            src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
        ></v-img>

        <v-layout column wrap>
            <v-form> 
                <v-row> 
                    제목 
                </v-row> 
                <v-row> 
                    <v-text-field :counter="50" label="제목" name="title" required v-model="title" outline maxlength="50" ></v-text-field> 
                </v-row> 
                <v-row> 
                    내용 
                </v-row> 
                <v-row> 
                    <v-textarea name="context" label="내용을 입력해주세요." v-model="context" :counter="1000" outline maxlength="1000" ></v-textarea> 
                </v-row> 
                <v-row> 
                    <v-btn tile depressed color="#eee" @click="writeClick"> 등록 </v-btn> 
                </v-row> 
            </v-form>
        </v-layout>
    </v-container> 
    
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'boardWriter',        

    methods: { 
        writeClick() { 
            if(this.$route.params.seq) { 
                axios.put('http://localhost:8080/vue-page/board', this.$data) 
                .then((res) => { 
                    console.log(res) 
                    this.$router.push('/vue-page/views/list') 
                }) 
                .catch((error) => { 
                    console.log(error) 
                }) 
            } else { 
                this.$data.regDt = this.getNowDate() 
                this.$data.uptDt = this.getNowDate() 
                axios.post('http://localhost:8080/vue-page/board', this.$data) 
                .then((res) => { 
                    console.log(res) 
                    this.$router.push('/vue-page/views/list') 
                }) 
                .catch((error) => { 
                    console.log(error) 
                }) 
            } 
        }, 
        getNowDate() { 
            var nowDate = new Date() 
            var year = nowDate.getFullYear().toString() 
            var month = (nowDate.getMonth() + 1).toString() 
            var day = nowDate.getDate().toString() 
            
            return year + "-" + (month[1] ? month : "0" + month[0]) + "-" + (day[1] ? day : "0" + day[0]) 
        }
    },
        
    data () { 
        return { 
            title : '그럴수 있따...', 
            context: '', 
            uptDt: '', 
            regDt: '' 
        } 
    } 
};
</script>

<style lang="scss">

</style>