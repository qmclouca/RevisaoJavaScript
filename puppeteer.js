const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false, 
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });
  const page = await browser.newPage();
  await page.goto('https://www.google.com'); // Adicione o protocolo "https://"
  
  const Selector = '#APjFqb';

  await page.waitForSelector(Selector, { timeout: 60000 });
  await page.type(Selector, 'Puppeteer');

  await page.screenshot({ path: 'example.png' });
  //await browser.close();
})();

//Navegação e Interatividade:
//page.goto(url); // Navega para uma URL específica.
//page.click(selector); // Clica em um elemento selecionado por um seletor CSS.
//page.type(selector, text); // Digita texto em um campo de entrada selecionado por um seletor CSS.
//page.waitForSelector(selector); // Espera até que um elemento com o seletor especificado esteja presente na página.

//Manipulação de Conteúdo:
//page.evaluate(fn); //Executa uma função JavaScript na página, permitindo que você acesse e modifique o conteúdo da página.
//page.evaluateHandle(fn); // Similar ao page.evaluate(), mas retorna um identificador de objeto manipulável.
//page.$(selector); // Seleciona o primeiro elemento que corresponde ao seletor CSS especificado na página.
//page.$$eval(selector, fn); // Avalia uma função no contexto da página para recuperar informações de vários elementos correspondentes ao seletor.
//page.setContent(html); // Define o conteúdo HTML da página.

//Captura de Tela e PDF:
//page.screenshot(options); // Tira uma captura de tela da página.
//page.pdf(options); //Gera um arquivo PDF da página.

//Espera e Detecção de Eventos:
//page.waitFor(timeout); Pausa a execução por um período de tempo especificado.
//page.waitForFunction(fn, options); // Espera até que uma função JavaScript retorne verdadeiro.
//page.waitForNavigation(options); // Espera até que a navegação na página seja concluída.
//page.waitForSelector(selector); // Espera até que um elemento correspondente ao seletor especificado seja visível na página.

//Manipulação de Cookies:
//page.cookies(); Obtém os cookies da página.
//page.setCookie(cookie); Define um cookie na página.
//page.deleteCookie(cookie); Exclui um cookie da página.
//page.deleteAllCookies(); Exclui todos os cookies da página.

//Emulação de Dispositivo:
//page.emulate(device); // Emula um dispositivo específico (por exemplo, um iPhone) para testar a aparência da página em dispositivos móveis.

//Trabalhando com Abas:
//browser.newPage(); // Abre uma nova aba no navegador.
//browser.pages(): //Retorna uma lista de todas as abas abertas no navegador.