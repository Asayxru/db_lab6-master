import db from '../config/db.js';

export const addMediaContentAnalysisResult = async ({ mediaContent_id, analysisResult_id, result }) => {
  const query = `
    INSERT INTO MediaContentAnalysisResult (mediaContent_id, analysisResult_id, result)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const res = await db.query(query, [mediaContent_id, analysisResult_id, result]);
  return res.rows[0];
};

export const getAllMediaContentAnalysisResults = async () => {
  const res = await db.query('SELECT * FROM MediaContentAnalysisResult');
  return res.rows;
};

export const getMediaContentAnalysisResult = async (mediaContent_id, analysisResult_id) => {
  const res = await db.query(
    'SELECT * FROM MediaContentAnalysisResult WHERE mediaContent_id = $1 AND analysisResult_id = $2',
    [mediaContent_id, analysisResult_id]
  );
  return res.rows[0];
};

export const updateMediaContentAnalysisResult = async (mediaContent_id, analysisResult_id, result) => {
  const res = await db.query(
    'UPDATE MediaContentAnalysisResult SET result = $1 WHERE mediaContent_id = $2 AND analysisResult_id = $3 RETURNING *;',
    [result, mediaContent_id, analysisResult_id]
  );
  return res.rows[0];
};

export const deleteMediaContentAnalysisResult = async (mediaContent_id, analysisResult_id) => {
  const res = await db.query(
    'DELETE FROM MediaContentAnalysisResult WHERE mediaContent_id = $1 AND analysisResult_id = $2 RETURNING *;',
    [mediaContent_id, analysisResult_id]
  );
  return res.rows[0];
};
