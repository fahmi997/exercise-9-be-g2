const { profile, login } = require("../models");
const { sequelize }= require("../models")

module.exports = {
    searchProfile: async (req, res) => {
        try {
            const { bio, email, username } = req.body;
            const whereCondition = {}; // Inisialisasi kondisi pencarian

            if (bio) {
                whereCondition.bio = bio;
            }

            if (email) {
                whereCondition.email = email;
            }

            if (username) {
                whereCondition.username = username;
            }

            const result = await profile.findAll({ where: whereCondition });
            return res.status(200).send(result);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },
    updateProfile: async (req, res) => {
        try {
            const { bio, email, username } = req.body;
            const userId = req.body.id; // Ambil ID pengguna yang ingin diubah profilnya

            // Mulai transaksi
            const t = await sequelize.transaction();

            try {
                // Buat objek yang akan digunakan untuk mengganti data profil
                const updatedProfileData = {};
                if (bio) updatedProfileData.bio = bio;

                // Buat objek yang akan digunakan untuk mengganti data login
                const updatedLoginData = {};
                if (username) updatedLoginData.username = username;
                if (email) updatedLoginData.email = email;

                // Lakukan operasi pembaruan pada kedua tabel
                await profile.update(updatedProfileData, {
                    where: { id: userId },
                    transaction: t
                });

                await login.update(updatedLoginData, {
                    where: { id: userId },
                    transaction: t
                });

                // Commit transaksi jika berhasil
                await t.commit();

                return res.status(200).send('Profil berhasil diperbarui.');
            } catch (error) {
                // Rollback transaksi jika terjadi kesalahan
                await t.rollback();
                console.log(error);
                return res.status(500).send(error);
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
}