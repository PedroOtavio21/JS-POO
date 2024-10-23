# Exercício 4 - Personagens para Jogo
Crie as seguintes classes utilizando javascript:

### Uma classe Character 

Que representa um personagem de um jogo.Ela deverá possuir atributos para nome, pontos de vida, de ataque e de defesa.Ela também deverá possuir um método para atacar, que tem como argumento o personagem alvo (outra instância de Character) e subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do personagem atual e a defesa do alvo.

### Uma classe Thief

Que representa um personagem de um tipo diferente.Ela deve herdar os atributos de Character, mas deve sobrescrever o método de ataque para que o cálculo seja de duas vezes a diferença entre os pontos de ataque do personagem atual e a defesa do alvo.

### Uma classe Mage

Que representa outro tipo de personagem e também herda de Character. No entanto, essa classe também deve ter um atributo para pontos de magia. Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados aos pontos de magia. A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar os pontos de vida de um personagem alvo (passado como argumento do método) em um valor de duas vezes os pontos de magia do personagem atual.

### Uma classe Warrior

Que representa outro tipo de personagem e também herda de Character.Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).

Obs.: Você pode criar um outro arquivo, importar as classes e criar algumas instâncias para testá-las.

## A fazer:
[X] Criar classes destinadas ao exercício (Character, Thief, Mage, Warrior e Main)
[ ] Aplicar atributos e métodos de cada classe, com suas respectivas lógicas
 - Character 🆗 
 - Thief 🆗
 - Mage
 - Warrior
 - Main
[ ] Aplicar encapsulamento (atributos privados e métodos públicos) e métodos get e set
[ ] Aplicar nova lógica de tomada de dano após finalização de exercício
[ ] Aplicar uma interface de execução criativa em classe main (não necessária em exercício)