import type { NextApiRequest, NextApiResponse } from 'next'
import { project } from 'catalogs/projects'
import { Project } from 'catalogs/projects/projectType'

export default (req: NextApiRequest, res: NextApiResponse<Project[]>) =>
	res.status(200).json(project)
