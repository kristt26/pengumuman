<?php defined('BASEPATH') or exit('No direct script access allowed');

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class TahunAjaran extends \Restserver\Libraries\REST_Controller
{
    public function __construct($config = 'rest')
    {
        parent::__construct($config);
        $this->load->model('Tahun_model');
    }

    public function Ambil_get()
    {
        $output = $this->Tahun_model->select();
        if($output){
            $message = [
                'status' => true,
                'data' => $output,
                'message' => "Success",
            ];
            $this->response($message, REST_Controller::HTTP_OK);
        }
        
    }
    public function simpan_post()
    {
        $this->load->library('Authorization_Token');
        $is_valid_token = $this->authorization_token->validateToken();
        if ($is_valid_token['status'] === true) {
            $POST = json_decode($this->security->xss_clean($this->input->raw_input_stream), true);
            $Output = $this->Tahun_model->insert($POST);
            if ($Output) {
                $message = [
                    'data' => $Output
                ];
                $this->response($message, REST_Controller::HTTP_OK);
            }else{
                $this->response($message, REST_Controller::HTTP_BAD_REQUEST);
            }
        }
    }
    public function ubah_put()
    {
        $this->load->library('Authorization_Token');
        $is_valid_token = $this->authorization_token->validateToken();
        if ($is_valid_token['status'] === true) {
            $POST = json_decode($this->security->xss_clean($this->input->raw_input_stream), true);
            $Output = $this->Tahun_model->update($POST);
            if ($Output) {
                $message = [
                    'status' => true,
                ];
                $this->response($message, REST_Controller::HTTP_OK);
            }else{
                $this->response($message, REST_Controller::HTTP_BAD_REQUEST);
            }
        }
    }
    public function Hapus_delete()
    {
        $this->load->library('Authorization_Token');
        $is_valid_token = $this->authorization_token->validateToken();
        if ($is_valid_token['status'] === true) {
            $Output = $this->Tahun_model->delete($this->uri->segment(3));
            if ($Output) {
                $message = [
                    'status' => true,
                ];
                $this->response($message, REST_Controller::HTTP_OK);
            }else{
                $this->response($message, REST_Controller::HTTP_BAD_REQUEST);
            }
        }
    }
}