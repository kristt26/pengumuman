<?php defined('BASEPATH') or exit('No direct script access allowed');

use Restserver\Libraries\REST_Controller;

require APPPATH . '/libraries/REST_Controller.php';

class Kelulusan extends \Restserver\Libraries\REST_Controller
{
    public function __construct($config = 'rest')
    {
        parent::__construct($config);
        $this->load->model('Kelulusan_model');
    }

    public function Ambil_get()
    {
        $output = $this->Kelulusan_model->select();
        if ($output) {
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
            $this->load->library('my_lib');
            $POST = json_decode($this->security->xss_clean($this->input->raw_input_stream), true);
            $encoded_string = !empty($POST['Berkas']) ? $POST['Berkas'] : 'V2ViZWFzeXN0ZXAgOik=';
            $item = $this->my_lib->upload_file($encoded_string);
            $item['extension'] = $this->my_lib->mime2ext($item['type']);
            $a = $item['extension'];
            $file = uniqid() .'.'. $a;
            $target_dir = './client/berkas/';
            $file_dir = $target_dir . $file;
            file_put_contents($file_dir, $item['file']);
            $POST['Berkas'] = $file;
            $Output = $this->Kelulusan_model->insert($POST);
            if($Output){
                $this->response($Output, REST_Controller::HTTP_OK);
            }else{
                $this->response(false, REST_Controller::HTTP_BAD_REQUEST);
            }
        }else{
            $this->response($is_valid_token, REST_Controller::HTTP_UNAUTHORIZED);
        }
    }
    public function ubah_put()
    {
        $this->load->library('Authorization_Token');
        $is_valid_token = $this->authorization_token->validateToken();
        if ($is_valid_token['status'] === true) {
            $POST = json_decode($this->security->xss_clean($this->input->raw_input_stream), true);
            $Output = $this->Kelulusan_model->update($POST);
            if ($Output) {
                $this->response(true, REST_Controller::HTTP_OK);
            } else {
                $this->response(false, REST_Controller::HTTP_BAD_REQUEST);
            }
        }
    }
    public function Hapus_delete()
    {
        $this->load->library('Authorization_Token');
        $is_valid_token = $this->authorization_token->validateToken();
        if ($is_valid_token['status'] === true) {
            $Output = $this->Kelulusan_model->delete($this->uri->segment(3));
            if ($Output) {
                $message = [
                    'status' => true,
                ];
                $this->response($message, REST_Controller::HTTP_OK);
            } else {
                $this->response($message, REST_Controller::HTTP_BAD_REQUEST);
            }
        }
    }
}
