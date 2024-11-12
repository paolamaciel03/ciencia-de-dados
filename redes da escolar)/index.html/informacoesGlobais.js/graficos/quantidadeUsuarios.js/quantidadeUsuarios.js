async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/paola/api/main/numero_usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
    
    console.log(dados)
}
    "Facebook": 3049,
    "Youtube": 2491,
    "WhatsApp": 2000,
    "Instagram": 2000,
    "Tiktok": 1562,
    "WeChat":1336
}quantidadeUsuarios()
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redes Sociais</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.plot.ly/plotly-2.27.0.min.js" charset="utf-8"></script>
</head>
const nomeDasRedes = Object.keys(dados)
const quantidadeUsuarios = Object.values(dados)
const data = [
  {
    x: nomeDasRedes,
    y: quantidadeUsuarios,
    type: 'bar'
  }const grafico = document.createElement('div')
  grafico.className = 'grafico'
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redes Sociais</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.plot.ly/plotly-2.27.0.min.js" charset="utf-8"></script>
  </head>
  async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
  
  const data = [
    {
      x: nomeDasRedes,
      y: quantidadeUsuarios,
      type: 'bar'
    }
  ]
  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(graficos

 "Contato com Amigos e Família": 17.83,
    "Preencher Tempo Livre": 13.97,
    "Ler Notícias": 12.38,
    "Conteúdos Educacionais": 10.93,
    "Tendências": 10.32,
    "Encontrar Inspiração": 9.58,
    "Produtos para Comprar": 9.34,
    "Compartilhar e Discutir": 8.12
    const data = [
      {
        x: 'nomeDasRedes',
        y: quantidadeDeUsuarios,
        type: 'bar',
        marker: {
          color: 'red'
        }
        const data = [
          {
            x: 'nomeDasRedes',
            y: quantidadeDeUsuarios,
            type: 'bar',
            marker: {
              color: getComputedStyle(document.body).getPropertyValue('--primary-color')
            }
          }
        ]const data = [
          {
            x: 'nomeDasRedes',
            y: quantidadeDeUsuarios,
            type: 'bar',
            marker: {
              color: getComputedStyle(document.body).getPropertyValue('--primary-color')
            }
          }
        ]
        },
            xaxis: {
                title: {
                    text: 'nome das redes sociais'
                }
            },
            yaxis: {
            
            }
        }
        
          },
            xaxis: {
                title: {
                    text: 'nome das redes sociais',
                    font: {
                        color: getCSS('--secondary-color')
                    }
                }
            },
            yaxis: {
                  },
                    xaxis: {
                        title: {
                            text: 'nome das redes sociais',
                            font: {
                                color: getCSS('--secondary-color')
                            }
                        }
                    },
                    yaxis: {
                            text: 'bilhões de usuários ativos',
                            font: {
                                color: getCSS('--secondary-color')
                            }
                        }
                          },
                            xaxis: {
                                tickfont{
                                    color: getCSS('-primary-color')
                                },
                                title: {
                                    text: 'nome das redes sociais',
                                    font: {
                                        color: getCSS('--secondary-color')
                                    }
                                }
                            },
                            yaxis: {
                                    text: 'bilhões de usuários ativos',
                                    font: {
                                        color: getCSS('--secondary-color')
                                    }
                                }
                                },
                                    xaxis: {
                                        tickfont{
                                            color: getCSS('-primary-color'),
                                            size: 16
                                        },
                                        title: {
                                            text: 'nome das redes sociais',
                                            font: {
                                                color: getCSS('--secondary-color')
                                            }
                                        }
                                    },
                                    yaxis: {
                                            text: 'bilhões de usuários ativos',
                                            font: {
                                                color: getCSS('--secondary-color')
                                            }
                                        }
                                        const layout = {
                                          plot_bgcolor: getCSS('--bg-color'),
                                          paper_bgcolor: getCSS('--bg-color'),
                                          title: {
                                            text: 'Redes sociais com mais usuários no mundo',
                                             x: 0,
                                             font: {
                                                 color: getCSS('--primary-color'),
                                                 family: getCSS('--font'),
                                                 size: 30
                                             }
                                          },
                                            xaxis: {
                                            
                                            },
                                            yaxis: {
                                                