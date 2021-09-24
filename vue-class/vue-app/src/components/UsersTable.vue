<template>
  <div>
      <b-table striped hover :items="users" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
    data(){
        return{
        fields:['email',{key:'gender',sortable:true},'name.first','cell','phone'],
        }
    },
    props:{
        users:{
            type:Array,
            default:()=>{}
        }
    },
}
</script>