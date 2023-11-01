const { login } = require("../models")

module.exports = {
    getData: async (req, res) => {
        try {
            const { username, email, phone_number, password } = req.body;
    
            // Pastikan minimal ada satu dari kolom username, email, atau phone_number yang diisi
            if (!(username || email || phone_number)) {
                return res.status(400).send('Pilih salah satu dari username, email, atau phone_number untuk pencarian.');
            }
    
            let account = null;
            if (username) {
                account = await login.findOne({ where: { username } });
            } else if (email) {
                account = await login.findOne({ where: { email } });
            } else if (phone_number) {
                account = await login.findOne({ where: { phone_number } });
            }
    
            if (!account) {
                return res.status(404).send('Akun tidak ditemukan.');
            }
    
            // Verifikasi kata sandi
            if (account.password === password) {
                // Jika kata sandi cocok, kirim data akun tanpa password
                const accountWithoutPassword = { ...account.dataValues, password: undefined };
                return res.status(200).send(accountWithoutPassword);
            } else {
                return res.status(401).send('Kata sandi tidak cocok.');
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
}