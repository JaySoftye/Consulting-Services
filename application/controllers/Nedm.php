<?php
class Nedm extends CI_Controller {

    public function survey($page = 'survey')
    {
      if ( ! file_exists(APPPATH.'views/pages/'.$page.'.php'))
    {
      show_404();
    }
      $data['title'] = ucfirst($page); // Capitalize the first letter
      $this->load->view('templates/header-nedm-survey');
      $this->load->view('pages/'.$page, $data);
      $this->load->view('templates/footer-nedm-survey');
    }

}
