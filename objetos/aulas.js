
class Pessoa {
  nome;
  idade;

   descrever(){
     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
   }
}

const alberto = new Pessoa();
alberto.nome = 'Alberto D Cerqueira';
alberto.idade = 40;

const eduardo = new Pessoa();
eduardo.nome = 'Eduardo M Domingues';
eduardo.idade = 14;

alberto.descrever();
eduardo.descrever();