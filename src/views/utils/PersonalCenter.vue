<template>

    <Card style="width:320px">
       <Form ref="checkForm" :model="checkForm" :rules="checkRule" >
            <FormItem prop="password">
                新密码<Input type="password" v-model="checkForm.password" placeholder="Password">
                </Input>
            </FormItem>
            <FormItem prop="checkPassword">
                确认密码<Input type="password" v-model="checkForm.checkPassword" placeholder="checkPassword">
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit" >确认</Button>
            </FormItem>
        </Form>
    </Card>
    
</template>
<script>
    export default {
         data () {
             const pwdCheckValidate = (rule, value, callback) => {
                if (this.checkForm.checkPassword != '' && value == '') {
                    callback(new Error('确认密码不能为空'));
                } else if (this.checkForm.password != value) {
                    callback(new Error('新密码和确认密码应相同'));
                } else {
                    callback();
                }
            };
            return {
                buts: false,
                checkForm: {
                    password:'',
                    checkPassword:'',
                },
                checkRule: {
                    password: [
                        { required: true, message: '请输入新密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码必须大于六位', trigger: 'blur' }
                    ],
                    checkPassword:[
                        {required: true, validator: pwdCheckValidate, trigger: 'blur'}
                    ]
                }
            }
        },
         methods: {
             handleSubmit(){
                if(this.checkForm.password==""){
                    this.$Message.warning('密码不能为空');
                }else if(this.checkForm.checkPassword==""){
                    this.$Message.warning('确认密码不能为空');
                }else if(this.checkForm.password!=this.checkForm.checkPassword){
                    this.$Message.warning('新密码和确认密码应相同');
                }else{
                    this.axios.put("/changePassword",this.checkForm).then(data => {
                        
                    }).catch(err => {
                        console.log("?????????????????????")
                    })
                }
                    
            }
         }
    }
</script>
<style>
#cp{
    width:50%
}
</style>