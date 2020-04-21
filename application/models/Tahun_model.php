<?php

class Tahun_model extends CI_Model
{
    public function select($idtahunajaran)
    {
        if($idtahunajaran){
            $this->db->where('idtahunajaran', $idtahunajaran);
            $result = $this->db->get('tahunajaran');
            return $result->result_array();
        }else{
            $result = $this->db->get('tahunajaran');
            return $result->result_array();
        }
    }
    public function insert($data)
    {
        $this->db->trans_begin();
        $this->db->set('status', false);
        $this->db->where('idtahunajaran', $data['idtahunajaran']);
        $this->db->update('tahunajaran');

        $item = [
            "tahunajaran" => $data['tahunajaran'],
            "semester" => $data['semester'],
            "status" => true,
        ];
        $this->db->insert('tahunajaran', $item);
        $item['idtahunajaran'] = $this->db->insert_id();
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
            "tahunajaran" => $data['tahunajaran'],
            "semester" => $data['semester'],
            "status" => true,
        ];
        $this->db->trans_begin();
        $this->db->where('idtahunajaran', $data['idtahunajaran']);
        $this->db->update('tahunajaran', $item);
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
        $this->db->where('idtahunajaran', $id);
        $this->db->delete('tahunajaran');
        return $result;
    }
}
