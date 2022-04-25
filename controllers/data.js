import axios from "axios";

const getDataPlans = async (req, res) => {
	const { network } = req.body;
	try {
		const { data } = await axios.post(
			"https://www.api.ringo.ng/api/agent/p2",
			{
				serviceCode: "DTA",
				network: network,
			},
			{
				headers: { email: "georgeigwec@gmail.com", password: "1234567899" },
			}
		);
		return res.status(200).json({ items: data });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "error on get items", error: error.message });
	}
};

const buyData = async (req, res) => {
	return res.status(200).json({ data: req.body });
};

export { getDataPlans, buyData };
