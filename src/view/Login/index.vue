<template>
    <div id="map-login">
        <div class="form-login">
            <label class="title-login">Đăng nhập</label>
            <el-form ref="formLogin" :model="formData" label-width="80px">
            <el-form-item label="Username">
                <el-input placeholder="Nhập tên đăng nhập" v-model="formData.userName"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input placeholder="Nhập mật khẩu" type="password" v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item class="btn-login">
                <el-button type="primary" @click="submitFormLogin">Login</el-button>
            </el-form-item>
            <el-form-item>
                <span>{{ msgError }}</span>
            </el-form-item>
        </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            formData: {
                userName: '',
                password: ''
            },
            msgError: ''
        }
    },
    methods: {
        submitFormLogin() {
            console.log(this.formData)
        }
    }
}

</script>

<style scoped>
#map-login {
    background-image: url('../../assets/picture/background_login.jpg');
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;


    .form-login {
        width: 500px;
        padding: 16px;
        background-color: #fff;
        
        .title-login {
            font-family: GoogleSans Blod;
            font-size: 24px;
            font-weight: 700;
            color: black;
            margin-bottom: 16p;
        }
    }
}
</style>

<style>
#map-login {
    .btn-login {
        .el-form-item__content {
            margin-left: 0 !important;
        }
        
    }

    .el-form {
        margin-top: 16px;
    }
}
</style>