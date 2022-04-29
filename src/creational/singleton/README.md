- Objetivo: Garantir que uma classe só tenha uma única instancia, e prover um ponto de acesso gloval a ela.

- Problemas:

  - Como posso garantir que uma classe tenha uma única instancia?
  - Como fazer com que essa instanca unica possa ser acessível globalmente?

- Solução:

  - Esconder o construtor dessa classe
  - Definir um ponto de criação estático que retone uma única instancia

- Singleton vs Monostate
  - Singleton: Deixa mais explicito
  - Monostate: Dá para trabalhar com interfaces
