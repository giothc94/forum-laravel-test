<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Student
 * 
 * @property int $idstudent
 * @property string $ci
 * @property string $name
 * @property string $lastname
 * 
 * @property Collection|Classroom[] $classrooms
 * @property Collection|Participation[] $participations
 *
 * @package App\Models
 */
class Student extends Model
{
	protected $table = 'students';
	protected $primaryKey = 'idstudent';
	public $timestamps = false;

	protected $fillable = [
		'ci',
		'name',
		'lastname'
	];

	public function classrooms()
	{
		return $this->hasMany(Classroom::class, 'students_idstudent');
	}

	public function participations()
	{
		return $this->hasMany(Participation::class, 'students_idstudent');
	}
}
