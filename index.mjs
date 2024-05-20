import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Função para obter o __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

scrape({
    // Forneça a URL do site que você quer copiar
    urls: ['https://irifa.com.br/'],

    // Especifique a pasta onde os arquivos do site serão salvos
    directory: path.resolve(__dirname, 'irifa'),
    
    // Carregue o plugin do Puppeteer
    plugins: [ 
        new PuppeteerPlugin({
            launchOptions: { 
                headless: true
            },
            scrollToBottom: {
                timeout: 10000, 
                viewportN: 10 
            }
        })
    ]
});
