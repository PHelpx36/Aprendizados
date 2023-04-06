using System;
using System.Collections.Generic;

namespace testando {
    public class Teste{
    
    /* static void menu(){
        Console.WriteLine("Iniciando programa...");

        char choice;
        choice = char.Parse(Console.ReadLine());

        switch(choice){
            case 'a':
                goto lista;
                break;
            case 'b':
                goto objeto:
                break;
            default:
                menu();
        } 
    }*/
    static void Main(){

        //lista:

        Random random = new Random();
        int [] lista = new int [3];
        for(int i = 0; i<lista.Length; i++){
            lista[i] = random.Next(10);
            Console.WriteLine(lista[i]);
        }
        //menu();

        Op d1 = new Op(Mat.fat);
        var result = d1(5);

        Console.WriteLine(result);
        Console.WriteLine(Mat.fat(5)); //Indico a Classe e depois o método

        d1 = new Op(Mat.fat2);

        Console.WriteLine(d1(3));

        float divi=0;
        try{
            divi = Mat.div(10f,0f); //Testando a excessão de quando o denominador é 0
            Console.WriteLine("A divisão entre 10 e 5 é {0}", divi);
        }catch(Exception e){
            Console.WriteLine("ERRO: {0}", e.Message);
        }finally{
            Console.WriteLine("Fim da divisão");
        }

        /*char escolha;
        char escolha1;
        inicio:

        Console.WriteLine("Escolha uma opção: [a] [b] [c]");

        escolha = char.Parse(Console.ReadLine());

        switch(escolha){
            case 'a':
                Console.WriteLine("Opção [a] escolhida");
                break;
            case 'b':
                Console.WriteLine("Opção [b] escolhida");
                break; 
            case 'c':
                Console.WriteLine("Opção [c] escolhida");
                break;
            default:
                Console.WriteLine("Opção invalida!\nTente novamente.");
                Console.WriteLine("Deseja tentar novamente?\n [y]  [n]");
                escolha1 = char.Parse(Console.ReadLine());

                switch(escolha){
                    case 'y':
                        goto inicio;
                    default:
                        break;
                }
                break;              
        }*/
        int [] lista2 = new int [3]{1,2,8};
        Console.WriteLine("BinarySearch");
        int procurado = 1;
        int pos = Array.BinarySearch(lista2,procurado);
        Console.WriteLine("Valor {0} está na posição {1}\n\n", procurado,pos);

        Console.WriteLine("CopyTo");
        lista2.CopyTo(lista,0);
        Array.Reverse(lista);
        foreach(int n in lista){
            Console.WriteLine(n);
        }

        Console.WriteLine("Fazendo Soma... Digite dois numeros");
        int n1, n2, s;
        n1 = Convert.ToInt32(Console.ReadLine());
        n2 = Convert.ToInt32(Console.ReadLine());
        s = soma(n1,n2);
        Console.WriteLine("A soma de {0} e {1} é {2}",n1,n2,s);

        int num = 10;
        dobrar(ref num);
        Console.WriteLine(num);
        int num1 = 10;
        int res;
        int ress;
        dobrar1(num1, out res, out ress);
        Console.WriteLine("Argumento OUT " + res +" " + ress);

        soma2(1,2,3,4,5,6,8);
        
        //objeto:

        Jogador j1 = new Jogador("Victor");
        Jogador j2 = new Jogador("Kevin");

        pancada(ref j1.energia);
        Console.WriteLine("A vida do jogador j1 é {0}",j1.energia);
        Console.WriteLine("O nome do jogado j1 é {0}",j1.nome);

        Inimigo i1 = new Inimigo("Slime");
        Inimigo i2 = new Inimigo("Minotaur");
        Inimigo i3 = new Inimigo("Soldier");

        Inimigo.alerta = true;

        i1.info();
        i2.info();
        i3.info();

        j1.setForca(5);
        Console.WriteLine("A força do jogado j1 é {0}",j1.getForca());

        //menu();

        // Testando Herança

        Carro c1 = new Carro("cinza","Celta");
        quebra();
        Console.WriteLine("Cor:..........{0}", c1.cor);
        Console.WriteLine("Nome:.........{0}", c1.nome);
        Console.WriteLine("Vel. Maxima:..{0}", c1.getVelMax());
        Console.WriteLine("Num. de rodas:{0}", c1.getRodas());
        c1.kmr = 12000;
        Console.WriteLine("Kilometros rodados:{0}", c1.kmr);
        Console.WriteLine("Kilometros rodados com array da classe veículo:{0}", c1[2]);
        Console.WriteLine("O carro está ligado? \n{0}", c1.getLigado());
        quebra();
    
        //Testando métodos que retornam objetos

        Funcionario f1 = new Funcionario("Victor");
        Funcionario f2 = new Funcionario("Kevin");

        f1.fabricar();
        f1.fabricar();
        f2.fabricar();

        //Testando coleções

        List<string> Carros = new List<string>();

        Carros.Add("Corsa");
        Carros.Add("Nivus");
        Carros.Add("Civic");
        
        int p = 0;
        foreach(string c in Carros){
            
            Console.WriteLine("Carro {0}: {1}", p,c);
            p++;
        }
        // comandos para listas Carros.CopyTo = copia a lista para outra lista
        //Carros.insert(pos, "oq") =insere um elemento na lista com determinada posição(pos)
        //Carros.remove("elemento")/removeAll;
    }
    static void quebra(){
        Console.WriteLine("\n------------------------------\n"); 
    }
    
    class Funcionario{
        private string nomeFuncionario;
        private int numPneu;
        public Funcionario(string nomeFuncionario){
            this.nomeFuncionario = nomeFuncionario;
            numPneu = 0;
        }

        public Pneu fabricar(){ //Referencia a um objeto
            numPneu++;
            return new Pneu(numPneu,nomeFuncionario);
        }
    }
    class Pneu{
        private int numPneu;
        private string nomeFuncionario;
        public Pneu(int numPneu, string nomeFuncionario){
            this.numPneu = numPneu;
            this.nomeFuncionario = nomeFuncionario;
            Console.WriteLine("Pneu criado: {0} - {1}", this.numPneu, this.nomeFuncionario);
        }
    }

    abstract class Veiculo{ //classe base
        private int rodas;
        protected int velMax;
        private bool ligado;  //Se eu colocar private aqui a classe herdada não consegue utilizar-la, apenas em métodos.
        private int km;
        
        public int kmr{
            get{
                return km;
            }
            set{
                km = value;
            }
        }
        private int[] km2 = new int[5]{10000,20000,30000,40000,50000}; //indexador!
        public int this[int i]{
            get{
                return km2[i];
            }
            set{
                km2[i] = value;
            }
        }
        public Veiculo(int rodas){
            this.rodas = rodas;
            velMax = 100;
            km = 10000;
        }
        public int getRodas(){
            return rodas;
        }
        
        public void ligar() {
            ligado = true;
        }
        public void desligar() {
            ligado = false;
        }
        public string getLigado() {
            return(ligado?"sim":"não");
        }
        abstract public int getVelMax();
    }

    class Carro : Veiculo { //classe filha
        public string nome;
        public string cor;
        public Carro(string cor, string nome):base(4){
            //ligado = false;  //posso acessar as variaveis da classe pai
            desligar();
            this.nome = nome;
            this.cor = cor;
        }
        override public int getVelMax(){
            return velMax;
        }
           
    }
    public class Jogador{
        public int energia;
        public bool vivo;
        private int forca; // privatiza a variavel para ser utilizada apenas dentro do objeto
        public string nome;

        public Jogador(string n){ //contrutor tem o mesmo nome da classe
            energia = 100;
            vivo = true;
            nome = n;
            forca= 20;
        }
        ~Jogador(){ //descontrutor
            Console.WriteLine("Jogador foi destruido");
        }

        public int getForca(){  //Apenas desse jeito é possivel entregar uma variavel private para fora
            return forca;
        }

        public void setForca(int f){
            forca += f;
            Console.WriteLine("A força foi incrementada em {0}",f);
        }
    }

    class Inimigo{ //testando classe
        
        public static bool alerta;
        public string nome;

        public Inimigo(string nome){
            alerta=false;
            this.nome=nome; // this.nome referencia a variavel do Objeto logo acima.
        }

        public void info() {
            Console.WriteLine("\nNome do Inimigo: {0}", nome);
            Console.WriteLine(alerta);
            Console.WriteLine("-------------------");
        }
    }

    // Testando Métodos

    delegate int Op(int n);
    class Mat{
        public static int fat(int n){ //rescursividade
            int res = 1;

            if(n <= 1){
                res = 1;
            }else{
                res=n*fat(n-1);
            }
            return res;
        }
        public static int fat2(int n){ //rescursividade
            int res = 1;

            if(n <= 1){
                res = 1;
            }else{
                res=n*fat2(n-1);
            }
            return res;
        }
        public static float div(float n1, float n2){
            float res;

            if(n2 == 0){
                throw new Exception("O denomidor não pode ser igual a 0!"); // faz imprimir esta mensage de exceção
            }
            res = n1/n2;

            return res;
        }
    }
    
    static void soma2(params int []n){    //Soma de vários valores
        int res = 0;
        for(int i = 0; i<n.Length; i++){
            res += n[i];
        }
        Console.WriteLine("A soma dos valores é {0}", res);
    }
    static void dobrar1(int valor, out int result, out int teste){   // utilizando funções com OUT
        result = valor*2;
        teste = 3;

    }
    static void dobrar(ref int valor){
        valor*=2;
    }
    static int soma(int v1,int v2) {
        int som = v1 + v2;
        return som;
        
    }
    static void pancada(ref int valor){
        Random random = new Random();
        int dano = random.Next(15);
        int crit = random.Next(1);
        if (crit == 1){
            
            dano *= 2;
        }
        valor -= dano;
        
    }
}
}
