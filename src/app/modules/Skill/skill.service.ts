import Skill from './skill.model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addSkill = async (payload: any) => {
    const skill = await Skill.create(payload)
    return { message: 'skill added', data: skill }
}

const skillServices = { addSkill }
export default skillServices
