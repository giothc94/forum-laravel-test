<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Course
 * 
 * @property int $idcourse
 * @property string $name
 * @property int $teachers_idteacher
 * 
 * @property Teacher $teacher
 * @property Collection|Classroom[] $classrooms
 *
 * @package App\Models
 */
class Course extends Model
{
	protected $table = 'courses';
	public $timestamps = false;

	protected $casts = [
		'teachers_idteacher' => 'int'
	];

	protected $fillable = [
		'name'
	];

	public function teacher()
	{
		return $this->belongsTo(Teacher::class, 'teachers_idteacher');
	}

	public function classrooms()
	{
		return $this->hasMany(Classroom::class, 'courses_id');
	}
}
