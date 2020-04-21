<?php

class Pegawai_model extends CI_Model
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
        $temp_file_path = tempnam(sys_get_temp_dir(), 'androidtempimage'); // might not work on some systems, specify your temp path if system temp dir is not writeable
        file_put_contents($temp_file_path, base64_decode($data['berkas']));
        $image_info = getimagesize($temp_file_path); 
        $_FILES['userfile'] = array(
            'name' => uniqid().'.'.preg_replace('!\w+/!', '', $image_info['mime']),
            'tmp_name' => $temp_file_path,
            'size'  => filesize($temp_file_path),
            'error' => UPLOAD_ERR_OK,
            'type'  => $image_info['mime'],
        );
        $this->upload->do_upload('userfile', true);
        
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
