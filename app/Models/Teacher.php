<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Teacher
 * 
 * @property int $idteacher
 * @property string $ci
 * @property string $asignatura
 * @property string $name
 * @property string $lastname
 * @property int $isTeacher
 * 
 * @property Collection|Course[] $courses
 *
 * @package App\Models
 */
class Teacher extends Model
{
	protected $table = 'teachers';
	protected $primaryKey = 'idteacher';
	public $timestamps = false;

	protected $casts = [
		'isTeacher' => 'int'
	];

	protected $fillable = [
		'ci',
		'asignatura',
		'name',
		'lastname',
		'isTeacher'
	];

	public function courses()
	{
		return $this->hasMany(Course::class, 'teachers_idteacher');
	}
}
