<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Classroom
 * 
 * @property int $idclassrom
 * @property int $courses_idcourse
 * @property int $students_idstudent
 * 
 * @property Course $course
 * @property Student $student
 * @property Collection|Forum[] $forums
 *
 * @package App\Models
 */
class Classroom extends Model
{
	protected $table = 'classrooms';
	protected $primaryKey = 'idclassrom';
	public $timestamps = false;

	protected $casts = [
		'courses_id' => 'int',
		'students_idstudent' => 'int'
	];

	protected $fillable = [
		'courses_idcourse',
		'students_idstudent'
	];

	public function course()
	{
		return $this->belongsTo(Course::class, 'courses_id');
	}

	public function student()
	{
		return $this->belongsTo(Student::class, 'students_idstudent');
	}

	public function forums()
	{
		return $this->hasMany(Forum::class, 'classrooms_courses_id', 'courses_id');
	}
}
