<template>
    <v-container fluid pa-0>
        <v-img
            max-height="120"
            max-width="100%"
            src="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
        ></v-img>

        <v-layout column wrap>
            <v-form> 
                <v-row outline no-gutters> 
                    {{ title }} 
                </v-row> 

                <v-row outline no-gutters> 
                    {{ context }} 
                </v-row> 
                
                <v-row no-gutters> 
                    <v-btn block tile depressed color="#eee" @click="listClick"> 목록 </v-btn> 
                </v-row> 
            </v-form>
        </v-layout>

    </v-container> 

    
</template>

<script>
import axios from 'axios'

export default {
    name: 'boardView',  
    created() { 
        this.fetch() 
    },

    methods: { 
        fetch() { 
            axios.get('http://localhost:8000/api/board/' + this.$router.params.seq) 
            .then((response) => { 
                console.log(response) 
            }) 
            .catch((error) => { 
                console.log(error) 
            }) 
        }, 
        listClick() { 
            this.$router.push('/vue-page/views/list') 
        }, 
        deleteClick() { 
            if(this.$data.seq) { 
                axios.delete('http://localhost:8000/api/board/' + this.$data.seq) 
                .then((response) => { 
                    console.log(response) 
                    this.$router.push('/vue-page/views/list') 
                }) 
                .catch((error) => { 
                    console.log(error) 
                }) 
            } 
        }

    },
        
    data () { 
        return { 
            title : "[제목] 그래 그럴수 있다",
            context: "마음이 불편한 휴식 중이라면 오랜만에 갖는 휴식 하지만 산책을 하거나, 여행이라도 가지 않으면, 허비하는 시간 같아서 불편한 마음 한 켠 아무것도 하지 않는 시간에 죄책감을 느끼며 제대로 된 휴식을 취하지 못하는 분들을 위해 휴식 다운 휴식"
        } 
    } 
};
</script>

<style lang="scss">

</style>