class Database {
	public $window, $document, $host, $username, $password, $database;
	
	function connect(){
		$this->host = "localhost";
		$this->database = "teamoutlook";
		$this->username = "root";
		$this->password = "";
		
		if(mysql_connect($this->host, $this->username, $this->password)) {
			if(mysql_select_db($this->database)) {
				return true;
			} else {
				return false;
			}
			return true;
		} else {
			return false;
		}
	}
}