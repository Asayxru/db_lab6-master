import {
  addMediaContentAnalysisResult,
  getAllMediaContentAnalysisResults,
  getMediaContentAnalysisResult,
  updateMediaContentAnalysisResult,
  deleteMediaContentAnalysisResult,
} from '../models/mediaContentAnalysisResultModel.js';
import handleAsync from '../utils/handleAsync.js';
import AppError from '../utils/appError.js';

export const createMCAR = handleAsync(async (req, res) => {
  const { mediaContent_id, analysisResult_id, result } = req.body;
  if (!mediaContent_id || !analysisResult_id || !result) {
    throw new AppError('Missing required fields', 400);
  }
  const newEntry = await addMediaContentAnalysisResult({ mediaContent_id, analysisResult_id, result });
  res.status(201).json({ status: 'success', message: newEntry });
});

export const listMCAR = handleAsync(async (req, res) => {
  const results = await getAllMediaContentAnalysisResults();
  res.status(200).json({ status: 'success', message: results });
});

export const getMCAR = handleAsync(async (req, res) => {
  const { mediaContent_id, analysisResult_id } = req.params;
  const result = await getMediaContentAnalysisResult(mediaContent_id, analysisResult_id);
  if (!result) throw new AppError('Entry not found', 404);
  res.status(200).json({ status: 'success', message: result });
});

export const updateMCAR = handleAsync(async (req, res) => {
  const { mediaContent_id, analysisResult_id } = req.params;
  const { result } = req.body;
  if (!result) throw new AppError('Missing result field for update', 400);
  const updated = await updateMediaContentAnalysisResult(mediaContent_id, analysisResult_id, result);
  if (!updated) throw new AppError('Entry not found', 404);
  res.status(200).json({ status: 'success', message: updated });
});

export const deleteMCAR = handleAsync(async (req, res) => {
  const { mediaContent_id, analysisResult_id } = req.params;
  const deleted = await deleteMediaContentAnalysisResult(mediaContent_id, analysisResult_id);
  if (!deleted) throw new AppError('Entry not found', 404);
  res.status(200).json({ status: 'success', message: 'Entry deleted successfully' });
});
