"use client";

import type React from "react";

import { useState } from "react";
import { Edit2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface LearningPoint {
	id: string;
	content: string;
}

interface TargetAudience {
	id: string;
	content: string;
}

export interface OverviewData {
	description: string;
	learningPoints: LearningPoint[];
	targetAudience: TargetAudience[];
}

interface OverviewEditModalProps {
	initialData: OverviewData;
	onSave: (data: OverviewData) => void;
}

export function OverviewEditModal({ initialData, onSave }: OverviewEditModalProps) {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState<OverviewData>(initialData);

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setData((prev) => ({ ...prev, description: e.target.value }));
	};

	const handleLearningPointChange = (id: string, value: string) => {
		setData((prev) => ({
			...prev,
			learningPoints: prev.learningPoints.map((point) => (point.id === id ? { ...point, content: value } : point)),
		}));
	};

	const handleAddLearningPoint = () => {
		setData((prev) => ({
			...prev,
			learningPoints: [...prev.learningPoints, { id: `point-${Date.now()}`, content: "" }],
		}));
	};

	const handleRemoveLearningPoint = (id: string) => {
		setData((prev) => ({
			...prev,
			learningPoints: prev.learningPoints.filter((point) => point.id !== id),
		}));
	};

	const handleTargetAudienceChange = (id: string, value: string) => {
		setData((prev) => ({
			...prev,
			targetAudience: prev.targetAudience.map((point) => (point.id === id ? { ...point, content: value } : point)),
		}));
	};

	const handleAddTargetAudience = () => {
		setData((prev) => ({
			...prev,
			targetAudience: [...prev.targetAudience, { id: `point-${Date.now()}`, content: "" }],
		}));
	};

	const handleRemoveTargetAudience = (id: string) => {
		setData((prev) => ({
			...prev,
			targetAudience: prev.targetAudience.filter((point) => point.id !== id),
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSave(data);
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button className="flex items-center gap-2 text-gray-400 hover:text-white border border-[#373737] rounded-full px-4 py-2">
					<Edit2 size={16} />
					<span className="text-sm">Edit</span>
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-[#101110] border-[#101110] text-white">
				<form onSubmit={handleSubmit}>
					<DialogHeader>
						<DialogTitle>Edit Overview</DialogTitle>
						<DialogDescription className="text-gray-400">Make changes to the bootcamp overview content.</DialogDescription>
					</DialogHeader>
					<div className="grid gap-6 py-4">
						<div className="grid gap-2">
							<Label
								htmlFor="description"
								className="text-base font-medium">
								Description
							</Label>
							<Textarea
								id="description"
								rows={8}
								value={data.description}
								onChange={handleDescriptionChange}
								className="resize-none bg-[#343734] border-gray-700 text-white"
							/>
						</div>

						<div className="grid gap-4">
							<div className="flex items-center justify-between">
								<Label className="text-base font-medium">What You Will Learn</Label>
								<Button
									type="button"
									variant="outline"
									size="sm"
									className="flex items-center gap-2 text-gray-700 border border-[#373737] px-4 py-2"
									onClick={handleAddLearningPoint}>
									Add Point
								</Button>
							</div>

							{data.learningPoints.map((point, index) => (
								<div
									key={point.id}
									className="grid gap-2">
									<div className="flex items-start gap-2">
										<Textarea
											value={point.content}
											onChange={(e) => handleLearningPointChange(point.id, e.target.value)}
											className="flex-1 resize-none bg-[#343734] border-gray-700 text-white"
											rows={3}
										/>
										<Button
											type="button"
											variant="destructive"
											size="sm"
											onClick={() => handleRemoveLearningPoint(point.id)}
											disabled={data.learningPoints.length <= 1}>
											Remove
										</Button>
									</div>
								</div>
							))}
						</div>

						<div className="grid gap-4">
							<div className="flex items-center justify-between">
								<Label className="text-base font-medium">Who is This Course For?</Label>
								<Button
									type="button"
									variant="outline"
									size="sm"
									className="flex items-center gap-2 text-gray-700 border border-[#373737] px-4 py-2"
									onClick={handleAddTargetAudience}>
									Add Point
								</Button>
							</div>

							{data.targetAudience.map((point, index) => (
								<div
									key={point.id}
									className="grid gap-2">
									<div className="flex items-start gap-2">
										<Textarea
											value={point.content}
											onChange={(e) => handleTargetAudienceChange(point.id, e.target.value)}
											className="flex-1 resize-none bg-[#343734] border-gray-700 text-white"
											rows={3}
										/>
										<Button
											type="button"
											variant="destructive"
											size="sm"
											onClick={() => handleRemoveTargetAudience(point.id)}
											disabled={data.targetAudience.length <= 1}>
											Remove
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>
					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							className="flex items-center gap-2 text-gray-700 border border-[#373737] px-4 py-2"
							onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button
							type="submit"
							className="bg-[#847474]">
							Save changes
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
