class User{
    constructor(fullname, email, password){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password){
        if(this.email === email && this.password === password){
            console.log("Login efetivado com sucesso!");
        } else {
            console.log("Erro ao executar login. Email ou senha estão errados.");
        }
    }
}
