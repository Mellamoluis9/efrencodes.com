import type { NextApiRequest, NextApiResponse } from 'next'
import { project } from '@/data/projects'
import { Project } from '@/data/projects/projectType'

export default (req: NextApiRequest, res: NextApiResponse<Project[]>) =>
	res.status(200).json(project)
