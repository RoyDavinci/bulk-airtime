const serializeJson = (req, res) => {
	return res.status(200).json({ data: req.body });
};

export default serializeJson;
