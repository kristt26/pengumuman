<?php

class Siswa_Model extends CI_Model
{
    public function select($idsiswa)
    {
        if($idsiswa){
            $this->db->where('idsiswa', $idsiswa);
            $result = $this->db->get('siswa');
            return $result->result_array();
        }else{
            $result = $this->db->get('siswa');
            return $result->result_array();
        }
    }
    public function insert($data)
    {
        $this->db->trans_begin();
        $pass = md5($data['nis']);
        $user = $data['nis'];
        $this->db->query("INSERT INTO user values('','$user', '$pass','true')");
        $iduser = $this->db->insert_id();
        $item = [
            "nis" => $data['nis'],
            "nama" => $data['nama'],
            "jeniskelamin" => $data['jeniskelamin'],
            "kontak" => $data['kontak'],
            "alamat" => $data['alamat'],
            "jurusan" => $data['jurusan'],
            "kelas" => $data['kelas'],
            "tempatlahir" => $data['tempatlahir'],
            "tanggallahir" => $data['tanggallahir'],
            "iduser" => $iduser,
        ];
        $this->db->query("INSERT INTO userinrole values('','$iduser', '2')");
        $this->db->insert('siswa', $item);
        $item['idsiswa'] = $this->db->insert_id();
        if ($this->db->trans_status() === false) {
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            return $item;
        }
    }
    public function update($data)
    {
        $item = [
            "nis" => $data['nis'],
            "nama" => $data['nama'],
            "jeniskelamin" => $data['jeniskelamin'],
            "kontak" => $data['kontak'],
            "alamat" => $data['alamat'],
            "jurusan" => $data['jurusan'],
            "kelas" => $data['kelas'],
            "tempatlahir" => $data['tempatlahir'],
            "tanggallahir" => $data['tanggallahir'],
            "iduser" => $iduser,
        ];
        $this->db->trans_begin();
        $this->db->where('idsiswa', $data['idsiswa']);
        $this->db->update('siswa', $item);
        if ($this->db->trans_status() === false) {
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            return true;
        }
    }
    public function delete($id)
    {
        $this->db->trans_start();
        $a = $this->select($id);
        $siswa = $a[0];
        $this->db->where('iduser', $siswa['iduser']);
        $this->db->delete('userinrole');
        $this->db->where('idsiswa', $id);
        $this->db->delete('siswa');
        $this->db->where('iduser', $siswa['iduser']);
        $this->db->delete('user');
        if ($this->db->trans_status() === false) {
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            return true;
        }
        $this->db->where('idsiswa', $id);
        $result = $this->db->delete('siswa');
        return $result;
    }
}
