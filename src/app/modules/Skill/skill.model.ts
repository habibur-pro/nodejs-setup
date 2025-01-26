import { Schema, model } from 'mongoose'
import { TSkill } from './skill.inteface'

const SkillSchema = new Schema<TSkill>(
    {
        id: {
            type: String,
            required: [true, 'id is required'],
        },
        name: {
            type: String,
            required: [true, 'name is required'],
        },
        progress: {
            type: Number,
            required: [true, 'name is required'],
        },
        priority: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
)

const Skill = model<TSkill>('skill', SkillSchema)
export default Skill
