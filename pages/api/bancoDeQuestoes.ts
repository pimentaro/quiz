
import RespostaModel from '../../model/resposta'
import QuestaoModel from './../../model/questao'

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual o bicho transmite a doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barat'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ], false),
    new QuestaoModel(307, 'Qual o bicho voa', [
        RespostaModel.errada('leao'),
        RespostaModel.errada('rato'),
        RespostaModel.errada('cobra'),
        RespostaModel.certa('aguia'),
    ], false)
]
export default questoes