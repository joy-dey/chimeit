import { supabase } from "$lib/supabase/supabase.client";

export async function load() {
    const { data } = await supabase.from("Employees").select(`id, name, emailAddress, phoneNumber, dateOfBirth`);

    return {
        employees: data ?? []
    }
}