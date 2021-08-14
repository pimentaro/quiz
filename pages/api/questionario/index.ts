import questoes from "../bancoDeQuestoes"
import { embaralhar } from "../../../functions/arrays"

export default function Questionario(req, res) {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}