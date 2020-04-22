<?php

class Kelulusan_model extends CI_Model
{
    public function select($idkelulusan)
    {
        if($idkelulusan){
            $this->db->where('idkelulusan', $idkelulusan);
            $result = $this->db->get('kelulusan');
            return $result->result_array();
        }else{
            $result = $this->db->get('kelulusan');
            return $result->result_array();
        }
    }
    public function insert($data)
    {
        $item = [
            'idtahunajaran'=>$data['idtahunajaran'],
            

        ];
        $this->db->insert('kelulusan', $data);
        $data['idkelulusan']= $this->db->insert_id();
        return $data;
    }
    public function update($data)
    {
        $item = [
            "nip" => $data['nip'],
            "nama" => $data['nama'],
            "jeniskelamin" => $data['jeniskelamin'],
            "jabatan" => $data['jabatan'],
            "alamat" => $data['alamat'],
            "kontak" => $data['kontak'],
            "pendidikan" => $data['pendidikan'],
            "iduser" => $iduser,
        ];
        $this->db->trans_begin();
        $this->db->where('idkelulusan', $data['idkelulusan']);
        $this->db->update('kelulusan', $item);
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
        $this->db->where('idkelulusan', $id);
        $this->db->delete('kelulusan');
        $this->db->where('iduser', $siswa['iduser']);
        $this->db->delete('user');
        if ($this->db->trans_status() === false) {
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            return true;
        }
        $this->db->where('idkelulusan', $id);
        $result = $this->db->delete('kelulusan');
        return $result;
    }
}
