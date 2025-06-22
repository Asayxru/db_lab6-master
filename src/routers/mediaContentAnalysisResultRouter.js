import express from 'express';
import {
  createMCAR,
  listMCAR,
  getMCAR,
  updateMCAR,
  deleteMCAR,
} from '../controllers/mediaContentAnalysisResultController.js';

const mcarRouter = new express.Router();

mcarRouter.post('/mcar', createMCAR);
mcarRouter.get('/mcar', listMCAR);
mcarRouter.get('/mcar/:mediaContent_id/:analysisResult_id', getMCAR);
mcarRouter.patch('/mcar/:mediaContent_id/:analysisResult_id', updateMCAR);
mcarRouter.delete('/mcar/:mediaContent_id/:analysisResult_id', deleteMCAR);

export default mcarRouter;
