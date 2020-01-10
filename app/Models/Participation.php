<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Participation
 *
 * @property int $idparticipacion
 * @property string $participation
 * @property int $students_idstudent
 * @property int $forums_idforum
 *
 * @property Forum $forum
 * @property Student $student
 *
 * @package App\Models
 */
class Participation extends Model
{
    protected $table = 'participations';
    public $timestamps = false;

    protected $casts = [
        'students_idstudent' => 'int',
        'forums_idforum' => 'int',
    ];

    protected $fillable = [
        'participation',
        'students_idstudent',
        'forums_idforum',
    ];

    public function forum()
    {
        return $this->belongsTo(Forum::class, 'forums_idforum');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'students_idstudent');
    }
}
