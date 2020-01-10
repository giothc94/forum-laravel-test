<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Forum
 * 
 * @property int $idforum
 * @property string $name
 * @property int $classrooms_courses_idcourse
 * 
 * @property Classroom $classroom
 * @property Collection|Participation[] $participations
 *
 * @package App\Models
 */
class Forum extends Model
{
	protected $table = 'forums';
	public $timestamps = false;

	protected $casts = [
		'classrooms_courses_idcourse' => 'int'
	];

	protected $fillable = [
		'name',
		'classrooms_courses_idcourse'
	];

	public function classroom()
	{
		return $this->belongsTo(Classroom::class, 'classrooms_courses_id');
	}

	public function participations()
	{
		return $this->hasMany(Participation::class, 'forums_idforum');
	}
}
