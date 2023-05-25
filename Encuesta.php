<?php
require_once 'encuesta/dbconect.php';
 
class Poll{
      
    public function addVote($subjectOption)
    {
       $daoObject = new encuestas();
       $sql = "INSERT INTO tbl_carreras_votos (course_id) VALUES ('".$subjectOption."')";
       $daoObject->insert($sql); 

    }
    
    public function getCource()
    {
        $daoObject = new encuestas();
        $sql = "SELECT * FROM tbl_carreras order by id";
        $result = $daoObject->select($sql);
        return $result;
    }
    
    
    
    public function getCourcewithVote()
    {
        $daoObject = new encuestas();
        $sql = "SELECT * FROM tbl_carreras order by id";
        $result = $daoObject->select($sql);
        if(!empty($result)) {
            foreach ($result as $k => $v) {
                $result[$k]["vote_count"] = 0;
                $sql_stmt = "SELECT COUNT(course_id) as vote_count FROM tbl_carreras_votos WHERE course_id = ". $result[$k]["id"];
                $voteResult = $daoObject->select($sql_stmt);
                if(!empty($voteResult[0]["vote_count"])) {
                    $result[$k]["vote_count"] = $voteResult[0]["vote_count"];
                }
            }
        }
        
        return $result;
    }
}

?>