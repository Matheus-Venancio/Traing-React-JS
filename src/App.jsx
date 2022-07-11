import React from "react";

import './App.css'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro' 
import ComFil from  './components/ComFil'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

export default (props) =>

<div className="App">  
        <Card titulo="#01- Primeiro Componente">
           <Primeiro/>
        </Card>

        <Card titulo="#02- Componentes com parametos">
        <ComParametro titulo="Esse titulo"
            subtitulo="Esseé o subtitulo">
        </ComParametro>
        </Card>

        <Card titulo="#03- Componentes com filhos">
        <ComFil>
            <ul>
                <li>Ana</li>
                <li>Gabriel</li>
                <li>Ana</li>
                <li>Bia</li>

            </ul>
        </ComFil>
        </Card>

        <Card titulo="#04- Repeticao">
        <Repeticao></Repeticao>
        </Card>

        <Card titulo="#05- Condicional">
        <Condicional numero={10}></Condicional>
        </Card>


    </div>