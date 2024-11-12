</footer>
<script type="module" src="graficos/common.js"></script>
<script type="module" src="graficos/informacoesGlobais.js"></script>
<script type="module" src="graficos/quantidadeUsuarios.js"></script>
</body>
</html>
const getCSS = (variavel) => {
  return getComputedStyle(document.body).getPropertyValue(variavel)
};
import { getCSS } from "./common.js";const data = [
  {
    x: 'nomeDasRedes',
    y: quantidadeDeUsuarios,
    type: 'bar',
    marker: {
      color: getCSS('--primary-color')
    }
  }
  const layout = {
      plot_bgcolor: getCSS('--bg-color')
  }const layout = {
      plot_bgcolor: getCSS('--bg-color'),
      paper_bgcolor: getCSS('--bg-color')
  }
  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Redes sociais com mais usuários no mundo'
    }
  }
  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Redes sociais com mais usuários no mundo',
       x: 0
       const layout = {
         plot_bgcolor: getCSS('--bg-color'),
         paper_bgcolor: getCSS('--bg-color'),
         title: {
           text: 'Redes sociais com mais usuários no mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color')
            }
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
                family: getCSS('--font')
            }
         }
         onst layout = {
           plot_bgcolor: getCSS('--bg-color'),
           paper_bgcolor: getCSS('--bg-color'),
           title: {
             text: 'Redes sociais com mais usuários no mundo',
              x: 0,
              font: {
                  color: getCSS('--primary-color'),
                  family: getCSS('--font'),
                  size: 30
                  const getCSS = (variavel) => {
                    return getComputedStyle(document.body).getPropertyValue(variavel)
                  }
                  
                  const tickConfig = {
                    color: getCSS('--primary-color'),
                    size: 16,
                    family: getCSS('--font')
                  }
                  
                  export { getCSS, tickConfig }
                  const getCSS = (variavel) => {
                    return getComputedStyle(document.body).getPropertyValue(variavel)
                  }
                  
                  const tickConfig = {
                  
                  }
                  
                  export { getCSS}
 s                 